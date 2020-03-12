import React from 'react';
import { Panel,  Div, Button, PanelHeader, PanelHeaderButton, Group} from '@vkontakte/vkui'
import './Persik.css'
import Icon24Add from '@vkontakte/icons/dist/24/add';

const Home = props => (
	<Panel id={props.id}>
	<PanelHeader left={<PanelHeaderButton
		target="_blank" href="https://vk.me/public190181207">
		<Icon24Add /></PanelHeaderButton>
	}>Поздравления</PanelHeader>
	<Group>
		<center><img src="https://sun9-70.userapi.com/c857228/v857228844/d0876/VsUhCD9osdw.jpg" width="100%" height="180px"/></center>
				{props.fetchedUser &&
					<Div className='center'>
							Привет, {props.fetchedUser.first_name}! Добро пожаловать в сервис, в котором ты сможешь найти поздравления для друзей и близких!
						</Div>
					}
						</Group>
								<Group>
											 <Div>
											 <Button size='xl' mode='secondary' onClick={() => props.go('ny')} >Новый год</Button><br/>
											 <Button size='xl' mode='secondary' onClick={() => props.go('krsh')}>Крещение</Button><br/>
											 <Button size='xl' mode='secondary' onClick={() => props.go('oil')}>Масленица</Button><br/>
									     	 <Button size='xl' mode='secondary' onClick={() => props.go('love')}>День святого Валентина</Button><br/>
							 			 	 <Button size='xl' mode='secondary' onClick={() => props.go('feb23')}>День защитника Отечества</Button><br/>
											 <Button size='xl' mode='secondary' onClick={() => props.go('may9')} >День победы</Button><br/>
											 <Button size='xl' mode='secondary' onClick={() => props.go('birthday')}>День рождения</Button><br/>
											 <Button size='xl' mode='secondary' onClick={() => props.go('martch8')}>Международный женский день</Button><br/>
											 <Button size='xl' mode='secondary' onClick={() => props.go('pascha')}>Пасха</Button><br/>
											 <Button size='xl' mode='secondary' onClick={() => props.go('dayknowns')}>День знаний</Button><br/>
											 <Button size='xl' mode='secondary' onClick={() => props.go('mother')}>День матери</Button>
											 </Div>
							</Group>
										</Panel>

);



export default Home;
