import React from 'react';
import { Panel,  Div, platform, PanelHeaderButton, IOS, PanelHeader, Group} from '@vkontakte/vkui'
import Text from './Text';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import './Persik.css'

const osname = platform();
let items = Array.from({ length: 50 })

const Martch_8 = props => (
	<Panel id={props.id}>
	<PanelHeader left={<PanelHeaderButton onClick={() => props.back()}>
			{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
		</PanelHeaderButton>}>
						8 марта
					</PanelHeader>
					<center><img src="https://sun9-22.userapi.com/c857016/v857016844/cfa49/T-buZBEcLYo.jpg" width="100%" height="180px"/></center>

					<Group>
					<Div className='center'>
				Здесь ты можешь найти поздравления к Международному женскому дню!
						</Div>
						</Group>
												{items.map((i, index) => (
											<Text  {...props} key={index} id={index} name='martch8'/>
										 		))}
													{ props.snackbar }
					</Panel>

);



export default Martch_8;
