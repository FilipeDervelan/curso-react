import { useRef } from 'react';
import { SomeComponent } from './SomeComponent';

export const HookUseImperativeHandle = () => {
	const componentRef = useRef();

	return (
		<div>
			<h1>useImperativeHandle</h1>
			<SomeComponent ref={componentRef} />
			<button onClick={() => componentRef.current.validate()}>Validate</button>
			<hr />
		</div>
	);
};
