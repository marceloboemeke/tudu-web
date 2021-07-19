import styled from 'styled-components';

const cardMargin = 15;

export const Container = styled.div`
    width: calc(20% - ${cardMargin*2}px);
    height: 140px;
    box-shadow: 0px .9px 10px rgba(0,0,0,.4);
    background: #fff;
    display: flex;
    justify-content: center;
    margin: ${cardMargin}px ${cardMargin}px;
    border-radius: 5px;
    flex-shrink: 0;
    font-family: "Poppins";
    position: relative;
	/* cursor: pointer; */
	transition: all linear 0.1s;
	overflow: hidden;

	&:hover {
		box-shadow: 0px 3px 15px rgba(0,0,0,.3);
	}

    @media (max-width: 1550px) {
        width: calc(25% - ${cardMargin*2}px);
    }

    @media (max-width: 1250px) {
        width: calc(33.33% - ${cardMargin*2}px);
        height: 150px;
    }

    @media (max-width: 900px) {
        width: calc(50% - ${cardMargin*2}px);
        height: 150px;
    }

    @media (max-width: 600px) {
        width: calc(100% - ${cardMargin*2}px);
        height: 180px;
    }

	.opts_card {
		display: flex;
		align-items: center;
		flex-direction: column;
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 50px;
		background-color: #eeeeee;
		border-radius: 5px 0 0 5px;
		justify-content: space-evenly;
	}

	&.late_task .opts_card {
		background-color: #fff1d1;
	}

	&.done_task {
		opacity: 0.5;
	}

	a {
		width: 50px;
		height: 33.33%;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: default;
		text-decoration: none;
	}
		
	.delete_card, .edit_card, .check_card {
		max-height: 33.33%;
		max-width: 25px;
		cursor: pointer;
		display: block;
		transition: opacity linear 0.1s;
	}

	.edit_card {
		max-width: 25px;
    	max-height: 100%;
	}

	.delete_card:hover, .edit_card:hover, .check_card:hover {
		opacity: 50%;
	}

	.txt_content_card {
		width: calc(100% - 50px);
		height: 100%;
		position: absolute;
		top: 0;
		right: 0;

		.title_card {
			font-size: 13pt;
			font-family: "Poppins";
			font-weight: bold;
			text-align: center;
			color: #0b3954;
			margin: 0;
			padding: 5px;
			padding-top: 10px;
		}

		.desc_card {
			padding: 5px 10px;
			padding-top: 0;
			margin: 0;
			font-size: 10pt;
			text-align: left;
			line-height: 120%;
			color: #0b3954;
		}

		.date_card {
			font-size: 9pt;
			color: #a0a0a0;
			position: absolute;
			bottom: 0;
			right: 0;
			padding: 7px 10px 3px 10px;
			border-radius: 5px 0 5px 0;
			background: linear-gradient(to top, rgba(255,255,255, 1), 85%, rgba(255,255,255,0));
			display: block;
			width: 100%;
			text-align: right;
			box-sizing: border-box;
		}
	}
`;