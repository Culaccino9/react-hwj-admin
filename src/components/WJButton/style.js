import styled from 'styled-components'

export const ButtonDivStyled = styled.div`
    .wj-a {
	position: relative;
	display: inline-block;
	padding: 1.2em 2em;
	text-decoration: none;
	text-align: center;
	cursor: pointer;
	user-select: none;
	color: white;
}

.wj-a::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: linear-gradient(135deg, #6e8efb, #a777e3);
		border-radius: 4px;
		transition: box-shadow .5s ease, transform .2s ease; 
		will-change: transform;
		box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
		transform:
			translateY(var(--ty, 0))
			rotateX(var(--rx, 0))
			rotateY(var(--ry, 0))
			translateZ(var(--tz, -12px));
	}
	
    .wj-a:hover::before {
		box-shadow: 0 5px 15px rgba(0, 0, 0, .3);
	}
	
	.wj-a::after {
		position: relative;
		display: inline-block;
		content: attr(data-title);
		transition: transform .2s ease; 
		font-weight: bold;
		letter-spacing: .01em;
		will-change: transform;
		transform:
			translateY(var(--ty, 0))
			rotateX(var(--rx, 0))
			rotateY(var(--ry, 0));
	}	

.wj-btn {
	display: flex;
	align-items: center;
	justify-content: center;
	// height: 100vh;
	transform-style: preserve-3d;
	// transform: perspective(800px);
}
`