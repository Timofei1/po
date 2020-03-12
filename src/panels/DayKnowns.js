import React from 'react';
import { Panel,  Div, platform, PanelHeaderButton, IOS, PanelHeader, Group} from '@vkontakte/vkui'
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Text from './Text';
import './Persik.css'

const osname = platform()
let items = Array.from({ length: 50 })

const DayKnowns = props => (
	<Panel id={props.id}>
	<PanelHeader left={<PanelHeaderButton onClick={() => props.back()}>
			{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
		</PanelHeaderButton>}>
					День знаний
					</PanelHeader>
					<center><img src="https://sun3-10.userapi.com/KX2J2enVHJba9JZs-E0fswqROTc2yTLgPaBNBA/7EuybejrSVE.jpg" width="100%" height="180px"/></center>

					<Group>
					<Div className='center'>
				Здесь ты можешь найти поздравления ко Дню знаний!
						</Div>
						</Group>
											{items.map((i, index) => (
												<Text  {...props} key={index} id={index} name='dayknowns'/>
											 ))}
											 	{ props.snackbar }
					</Panel>

);


export default DayKnowns;
