import React from 'react';
import { Panel, Div, PanelHeader, Group} from '@vkontakte/vkui'
import FaveText from './FaveText';
import './Persik.css'

const Fave = props => {

	let items = Array.from({ length: 50 })

	return (
		<Panel id={props.id}>
		<PanelHeader>Избранное</PanelHeader>
		<center><img src="https://sun9-70.userapi.com/c857228/v857228844/d0876/VsUhCD9osdw.jpg" width="100%" height="180px"/></center>

					<Group>
						<Div className='center'>
					Здесь ты можешь найти свои избранные поздравления!
							</Div>
						</Group>
							{props.zero && <Group><Div className='center'>У тебя нет избранных поздравлений!</Div></Group>}

													{items.map((i, index) => (
													<FaveText {...props} key={index} id={index}/>
											 		))}
													{ props.snackbar }
						</Panel>

	);
}



export default Fave;
