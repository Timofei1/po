import React from 'react';
import { Panel, Div, platform, PanelHeaderButton, IOS, PanelHeader, Group} from '@vkontakte/vkui'
import Text from './Text';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import './Persik.css'

const osname = platform();
let items = Array.from({ length: 50 })

const Oil = props => (
	<Panel id={props.id}>
	<PanelHeader left={<PanelHeaderButton onClick={() => props.back()}>
			{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
		</PanelHeaderButton>}>
					Масленица
					</PanelHeader>
					<center><img src="https://sun9-26.userapi.com/c855532/v855532844/1f46bc/pzJCcFPrpRk.jpg" width="100%" height="180px"/></center>

					<Group>
					<Div className='center'>
				Здесь ты можешь найти поздравления к Масленице!
						</Div>
						</Group>
											{items.map((i, index) => (
										<Text  {...props} key={index} id={index} name='oil'/>
									 		))}
												{ props.snackbar }
					</Panel>

);

export default Oil;
