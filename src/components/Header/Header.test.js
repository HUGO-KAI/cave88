import TestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from './Header'


//Basic Test with React-test-renderer
it('renders correctly react-test-renderer', () => {
const renderer = new ShallowRenderer();
renderer.render(<Header />);
const result = renderer.getRenderOutput();
expect(result).toMatchSnapshot();
});
