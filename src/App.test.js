import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders withou crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Note that if we add some test to this file after the image has been built, any updates to this file will not be displayed in the running tests,
// And the tests will not automatically update
// Two ways to do this: 1. docker exec -it <runningContainerID> npm run test  (obvious duh) (automatically updates running tests, not standard)
// 2. Add another service to the docker compose file strictly for running tests (not standard either) (does not work if we want to provide some inputs to test suite with docker-compose)
// This happens because when we run docker attach, it attaches to the primary process inside the container. Now, the primary process is not "npm run tests"
// It is just "npm". It starts some secondary and tertiary processes like "run" and "tests", but there is no way of attaching to the secondary and tertiary processes
// Since we can attach only to the primary one
// The downside to the 1st way is that we have to remember the container name/id to run exec with, which is a headache
