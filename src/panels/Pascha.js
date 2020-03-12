import React from 'react';
import { Panel,  Div, platform, PanelHeaderButton, IOS, PanelHeader, Group} from '@vkontakte/vkui'
import Text from './Text';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import './Persik.css'

const osname = platform();
let items = Array.from({ length: 50 })

const Bought = props => (
	<Panel id={props.id}>
	<PanelHeader left={<PanelHeaderButton onClick={() => props.back()}>
			{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
		</PanelHeaderButton>}>
					 Пасха
					</PanelHeader>		
					<center><img src="https://sun9-28.userapi.com/c858320/v858320844/176304/x8AqsEOXCII.jpg" width="100%" height="180px"/></center>

					<Group>
					<Div className='center'>
				Здесь ты можешь найти поздравления к Пасхе!
						</Div>
						</Group>
												{items.map((i, index) => (
											<Text  {...props} key={index} id={index} name='pascha'/>
										 		))}
													{ props.snackbar }
					</Panel>

);


export default Bought;
