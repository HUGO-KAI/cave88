import ShallowRenderer from 'react-test-renderer/shallow';
import TopJumper from './TopJumper'


//Test with React-test-renderer
it('renders correctly react-test-renderer', () => {
const renderer = new ShallowRenderer();
renderer.render(<TopJumper />);
const result = renderer.getRenderOutput();

expect(result).toMatchSnapshot();
});
