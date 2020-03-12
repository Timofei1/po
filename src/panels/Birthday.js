import React from 'react';
import { Panel,  Div, platform, PanelHeaderButton, IOS, PanelHeader, Group} from '@vkontakte/vkui'
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Text from './Text';
import './Persik.css'

let items = Array.from({ length: 50 })
const osname = platform()

const Birthday = props => (
	<Panel id={props.id}>
	<PanelHeader left={<PanelHeaderButton onClick={() => props.back()}>
			{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
		</PanelHeaderButton>}>
					 День рождения
					</PanelHeader>
					<center><img src="https://sun9-44.userapi.com/c855128/v855128844/1e487b/IYFFe-beWqo.jpg" width="100%" height="180px"/></center>

					<Group>
					<Div className='center'>
				Здесь ты можешь найти поздравления ко Дню рождения!
						</Div>
						</Group>
											{items.map((i, index) => (
										<Text  {...props} key={index} id={index} name='birthday'/>
									 		))}
											{ props.snackbar }
					</Panel>

);


export default Birthday;
