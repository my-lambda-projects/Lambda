// HOF Wraps the native Promise API
// to add take a shouldCancel promise and add
// an onCancel() callback.
const speculation = (
  fn,
  cancel = Promise.reject() // Don't cancel by default
) => new Promise((resolve, reject) => {
  const noop = () => {};

  const onCancel = (
    handleCancel
  ) => cancel.then(
      handleCancel,
      // Ignore expected cancel rejections:
      noop
    )
    // handle onCancel errors
    .catch(e => reject(e))
  ;

  fn(resolve, reject, onCancel);
});