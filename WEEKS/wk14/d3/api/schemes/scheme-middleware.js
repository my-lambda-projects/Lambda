const schemes = require('./scheme-model');

const checkSchemeId = (req, res, next) => {
    const { scheme_id } = req.params;

    schemes.findById(scheme_id)
      .then((resp) => {
        req.scheme = resp;
        if (resp === undefined || resp === null || resp === []) {
          res.status(404).json({ 
            message: `scheme with scheme_id ${scheme_id} not found` 
          })
        } else {
          next();
        }
      })
}

const validateScheme = (req, res, next) => {
  const scheme = req.body;
  const testThis = scheme.scheme_name;

  if (!testThis || typeof(testThis) !== "string" || testThis === "") {
    res.status(400).json(  {
      message: "invalid scheme_name"
    })
  } else {
    next();
  }
}

const validateStep = (req, res, next) => {
  const step = req.body;
  const testThis = step.instructions;
  let failTest = false;

  if (isNaN(step.step_number) || step.step_number < 1) {
    failTest = true;
  } else if (!testThis || typeof(testThis) !== "string" || testThis === "") {
    failTest = true; 
  }
  
  if (failTest) { 
    res.status(400).json({ message: "invalid step" })
  } else {
    next();
  }
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
