const User = require('../db/models/user');


/**
 * @param {name, email, password}
 * Create a user
 * @return {user}
 **/
 exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const user = new User({
        name,
        email,
        password
      });
          sendWelcomeEmail(user.email, user.name);
      const token = await user.generateAuthToken();
      res.cookie('jwt', token, {
        httpOnly: true,
        sameSite: 'Strict',
        secure: process.env.NODE_ENV !== 'production' ? false : true
      });
      res.status(201).json(user);
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
  };

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findByCredentials(email, password);
      const token = await user.generateAuthToken();
      res.cookie('jwt', token, {
        httpOnly: true,
        sameSite: 'Strict',
        secure: process.env.NODE_ENV !== 'production' ? false : true
      });
      res.json(user);
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
  };

  /**
 * @param {email}
 * Password Reset Request
 * This route sends an email that the
 * user must click within 10 minutes
 * to reset their password.
 * @return {}
 */
exports.requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.query,
      user = await User.findOne({ email });
    if (!user) throw new Error("account doesn't exist");
    // Build jwt token
    const token = jwt.sign(
      { _id: user._id.toString(), name: user.name },
      process.env.JWT_SECRET,
      {
        expiresIn: '10m',
      }
    );
    forgotPasswordEmail(email, token);
    res.json({ message: 'reset password email sent' });
  } catch (e) {
    res.json({ error: e.toString() });
  }
};

/**
 * @param {token}
 * Redirect to password reset page
 * @return {}
 */
exports.passwordRedirect = async (req, res) => {
  const { token } = req.params;
  try {
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) throw new Error(err.message);
    });
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 600000,
      sameSite: 'Strict',
    });
    res.redirect(process.env.URL + '/update-password');
  } catch (e) {
    res.json({ error: e.toString() });
  }
};

  exports.getCurrentUser = async (req, res) => res.json(req.user);

  /**
 * @param {{updates}}
 * Update a user
 * @return {user}
 */
exports.updateCurrentUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password', 'avatar'];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).send({ error: 'invalid updates!' });
  try {
    updates.forEach(update => (req.user[update] = req.body[update]));
    await req.user.save();
    res.json(req.user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

/**
 * @param {}
 * Logout a user
 * @return {}
 */
 exports.logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token !== req.cookies.jwt;
    });
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'Logged out' });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

exports.logoutAllDevices = async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'all devices logged out' });
  } catch (e) {
    res.status(500).send();
  }
};

/**
 * @param {}
 * Delete a user
 * @return {}
 */
exports.deleteUser = async (req, res) => {
  try {
    await req.user.remove();
    sendCancellationEmail(req.user.email, req.user.name);
    res.clearCookie('jwt');
    res.json({ message: 'user deleted' });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    req.user.password = req.body.password;
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'password updated successfully' });
  } catch (e) {
    res.json({ error: e.toString() });
  }
};