import React from 'react';
import { Panel, HorizontalScroll, PanelHeaderButton,  Div, Avatar, Header, Separator, Gallery, Cell, PanelHeader, HeaderButton, Group, Button, IOS, platform, Link, Footer} from '@vkontakte/vkui'
import './Persik.css'
import Icon24User from '@vkontakte/icons/dist/24/user';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24CommentOutline from '@vkontakte/icons/dist/24/comment_outline';
import Icon24Chats from '@vkontakte/icons/dist/24/chats';
import Icon24Write from '@vkontakte/icons/dist/24/write';
import Icon24Advertising from '@vkontakte/icons/dist/24/advertising';
import Gradient from '@vkontakte/vkui/dist/components/Gradient/Gradient';

const osname = platform();

const itemStyle = {
  flexShrink: 0,
  width: 80,
  height: 94,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: 12
};

const Settings = props => (
	<Panel id={props.id}>
	<PanelHeader  left={<PanelHeaderButton onClick={() => props.back()}>
			{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
		</PanelHeaderButton>}>
    Обратная связь</PanelHeader>
    <Group header={<Header mode="secondary">Sticks right</Header>}>
              <Gallery
                slideWidth="90%"
                style={{ height: 150 }}
                bullets="dark"
              >
                <div style={{ backgroundColor: 'var(--destructive)' }} />
                <div style={{ backgroundColor: 'var(--button_commerce_background)' }} />
                <div style={{ backgroundColor: 'var(--accent)' }} />
              </Gallery>
            </Group>
    <Group header={<Header mode="secondary">О нас</Header>}>
        <Div>
           Поздравления - это приложение-сборник множества поздравлений для друзей и близких!
        </Div>
    </Group>
    <Group header={<Header mode="secondary">Новости</Header>}>
        <Div>
            Новостей пока нет.
        </Div>
    </Group>
								<Group header={<Header mode="secondary">Кем разработано?</Header>}>
                                    <Div>
                                <Cell
                  before={<Avatar size={72}
                  src="https://sun9-35.userapi.com/c200828/v200828522/11d0f/mN53S7VCcvo.png" />}
                  size="l"
                  description="Разработчик"
                  bottomContent={
                    <div style={{ display: 'flex' }}>
                      <Button size="m" component="a" href="https://vk.me/id288498260">Написать</Button>
                      <Button size="m" mode="secondary" style={{ marginLeft: 8 }} component="a" href="https://vk.com/id288498260">Перейти</Button>
                    </div>
                  }
                >
                  Тимофей Рылов</Cell>
                  <Separator style={{ margin: '12px 0' }} />
			 <Cell
                  before={<Avatar size={72}
                  src="https://sun9-65.userapi.com/c856136/v856136104/19973d/raB1qYVqAEE.jpg?ava=1" />}
                  size="l"
                  description="Сообщество"
                  bottomContent={
                    <div style={{ display: 'flex' }}>
                      <Button size="m" mode="secondary" style={{ marginLeft: 8 }} component="a" href="https://vk.com/legiondev">Перейти</Button>
                    </div>
                  }
                >
                  LegionDev</Cell>	</Div>	 
							</Group>

            <Group header={<Header mode="secondary">Дополнительно</Header>}>
                <Div>
                <Button size="xl" mode="secondary" component="a" href="https://vk.com/topic-190181207_44177493" before={<Icon24CommentOutline/>}>Оставить отзыв</Button><br/>
                <Button size="xl" mode="secondary" component="a" href="https://vk.com/topic-190181207_44177494" before={<Icon24CommentOutline/>}>Предложить идею</Button><br/>
                <Button size="xl" mode="secondary" component="a" href="https://vk.me/public190181207" before={<Icon24Write/>}>Предложить поздравление/категорию</Button><br/>
                <Button size="xl" mode="secondary" component="a" href="https://vk.me/public190181207" before={<Icon24Advertising/>}>Заказать рекламу</Button><br/>


                </Div>
            </Group>
            <Group header={<Header mode="secondary">Беседы</Header>}>
                <Div>
                    <Button size="xl" mode="secondary" component="a" href="https://vk.me/join/AJQ1dzSr9RbU3getnfSnTF62" before={<Icon24Chats/>}>Поздравления</Button>                    
                </Div>
            </Group>
            
            <Group header={<Header mode="secondary">Вам понравится</Header>}>
            <Div>
       <HorizontalScroll>
          <div style={{ display: 'flex' }}>
          
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>

            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>

            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>

            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>

            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>

            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>
            <div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div><div style={itemStyle}><Button mode="tertiary" className="ad-button" component="a" href="https://vk.me/public190181207">
              <Avatar mode="app" size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              <center>Реклама</center></Button>
            </div>

          </div>
        </HorizontalScroll>
        </Div>
      </Group>
      

            <Footer>Версия: 1.0</Footer>
							
										</Panel>

);



export default Settings;