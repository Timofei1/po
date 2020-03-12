import React from 'react';
import { Panel,  Div, platform, PanelHeaderButton, IOS, PanelHeader, Group} from '@vkontakte/vkui'
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Text from './Text';
import './Persik.css'

const osname = platform();
let items = Array.from({ length: 50 })

const Feb_23 = props => (
	<Panel id={props.id}>
	<PanelHeader left={<PanelHeaderButton onClick={() => props.back()}>
			{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
		</PanelHeaderButton>}>
					 23 февраля
					</PanelHeader>
					<center><img src="https://sun9-69.userapi.com/c857432/v857432844/166725/ZC-D68A3T98.jpg" width="100%" height="180px"/></center>

					<Group>
					<Div className='center'>
				Здесь ты можешь найти поздравления ко Дню защитника Отечества!
						</Div>
						</Group>
												{items.map((i, index) => (
											<Text  {...props} key={index} id={index} name='feb23'/>
										 		))}
													{ props.snackbar }
					</Panel>

);


export default Feb_23;
