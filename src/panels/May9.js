import React from 'react';
import { Panel, Div, platform, PanelHeaderButton, IOS, PanelHeader, Group} from '@vkontakte/vkui'
import Text from './Text';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import './Persik.css'

const osname = platform();
let items = Array.from({ length: 50 })

const May9 = props => (
	<Panel id={props.id}>
	<PanelHeader left={<PanelHeaderButton onClick={() => props.back()}>
			{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
		</PanelHeaderButton>}>
					9 мая
					</PanelHeader>
					<center><img src="https://sun9-31.userapi.com/c205224/v205224844/5d611/VJCgNlcG68M.jpg" width="100%" height="180px"/></center>

					<Group>
					<Div className='center'>
				Здесь ты можешь найти поздравления ко Дню победы!
						</Div>
						</Group>
											{items.map((i, index) => (
										<Text {...props} key={index} id={index} name='may9'/>
									 		))}
												{ props.snackbar }
					</Panel>

);

export default May9;
