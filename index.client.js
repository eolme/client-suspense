var React = require('react');

/**
 * ClientSuspense component
 *
 * @param {Object} props ClientSuspense props
 * @param {React.ReactNode | undefined} [props.fallback]
 * @param {React.ReactNode | undefined} [props.children]
 * @returns {React.ReactElement | null}
 */
function ClientSuspense(props) {
  var state = React.useState(false);

  function effect() {
    state[1](true);
  }

  React.useEffect(effect, []);

  return React.createElement(React.Suspense, {
    fallback: props.fallback,
    children: state[0] ? props.children : props.fallback
  });
}

module.exports = ClientSuspense;
module.exports.default = ClientSuspense;
