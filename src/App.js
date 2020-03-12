import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-bridge';
import { IOS, platform, Snackbar, Avatar, View, Epic, TabbarItem, Tabbar, ConfigProvider } from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';

import Birthday from './panels/Birthday';
import Love from './panels/Love';
import NY from './panels/NY';
import DayKnowns from './panels/DayKnowns';
import Feb23 from './panels/Feb23';
import Mother from './panels/Mother';
import Pascha from './panels/Pascha';
import Martch8 from './panels/Martch8';
import Krsh from './panels/Krsh';
import Oil from './panels/Oil';
import May9 from './panels/May9';
import Fave from './panels/Fave';
import Settings from './panels/Settings';

import Icon24Gift from '@vkontakte/icons/dist/24/gift';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';
import Icon16Clear from '@vkontakte/icons/dist/16/clear';
import Icon16Done from '@vkontakte/icons/dist/16/done';

import './panels/Persik.css'

const osname = platform();
//console.log(process.env)
const App = () => {
	const [activeStory, setActiveStory] = useState('home');
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [faves, setFaves] = useState([]);
	const [zero, setZero] = useState(true);
	const [snackbar, setSnackbar] = useState(null);
	const [popout, setPopout] = useState(null); // <ScreenSpinner size='large' />


	useEffect(() => {
		if(osname !== IOS){
			window.addEventListener('popstate', e => e.preventDefault() & menu(e));
			window.history.pushState({ panel: 'home'}, 'home')
		}
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
			if (type === 'VKWebAppShowWallPostBoxResult') {
				connect.send("VKWebAppTapticNotificationOccurred", {"type": "success"});
				setSnackbar( <Snackbar
					layout="vertical"
					duration={2000}
					onClose={() => setSnackbar(null)}
					before={<Avatar size={24} style={{backgroundColor: '#4bb34b'}}><Icon16Done fill="#fff" width={14} height={14} /></Avatar>}
				>
					Поздравление опубликовано!
				</Snackbar>)
			}
			if (type === 'VKWebAppStorageGetResult') {
						console.log(type, data)
						let res = (data.keys[0].value).split('^')
						res = res.filter(e => e !== '');
						if(res.length > 0){
							setFaves(res)
							setZero(false)
						}
						console.log(faves)

			}
		});
		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			setUser(user);
			//setPopout(null);
		}
		fetchData();
		connect.send("VKWebAppStorageGet", {"keys": ["faves"]});
		//setTimeout(() => , 3000)
		 // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const menu = e => {
		setSnackbar(null);
		setPopout(null);
		if(e.state){
			setActivePanel(e.state.panel)
		} else {
			setActivePanel('home')
			window.history.pushState( { panel: 'home' }, 'home')
			connect.send("VKWebAppClose", { "status": "success", "text": "Будем рады видеть вас вновь!" })
		}
	}

	const back = () => {
		setSnackbar(null);
		setPopout(null);
		if(activeStory === 'home'){
			connect.send('VKWebAppDisableSwipeBack');
			window.history.pushState({ panel: 'home' }, 'home');
			setActivePanel('home');
		}
		if(activeStory === 'fave' && activePanel !== 'fave'){
			connect.send('VKWebAppDisableSwipeBack');
			setActiveStory('home');
		}
		if(activeStory === 'settings' && activePanel !== 'settings'){
			connect.send('VKWebAppDisableSwipeBack');
			setActiveStory('home');
		}

   }

	 const share = (text, owner_id = fetchedUser.id) => {
		setSnackbar(null);
	  connect.send("VKWebAppShowWallPostBox", { "owner_id": owner_id, "message": text, "attachments": "https://vk.com/app7283591"});
	 };

   const go = (e) => {
		 setSnackbar(null);
		 setPopout(null);
		 if(e !== 'fave' && e !== 'settings'){
			 if(e === 'home'){
				 connect.send("VKWebAppJoinGroup", {"group_id": 190181207});
				 connect.send('VKWebAppDisableSwipeBack');
				 window.history.back();
			 } else {
				 connect.send('VKWebAppEnableSwipeBack');
				 window.history.pushState({ panel: e }, e);
			 }
			 setActivePanel(e);
		 	} else if(e === 'fave') {
			 setActiveStory('fave');
			 connect.send('VKWebAppDisableSwipeBack');
		 } else if(e === 'settings') {
			 setActiveStory('settings');
			 connect.send('VKWebAppDisableSwipeBack');
		 }
		 
   }
	 const updFav = (e) => {
		 if(!window.navigator.onLine) {
			 setSnackbar( <Snackbar
 				duration={2000}
         layout="vertical"
         onClose={() => setSnackbar(null)}
         before={<Avatar size={24} style={{backgroundColor: '#FF0000'}}><Icon16Clear fill="#fff" width={14} height={14} /></Avatar>}
       >
         Отсутствует подключение к интернету.
       </Snackbar>);
 			connect.send("VKWebAppTapticNotificationOccurred", {"type": "error"});
			 return;
		 }
		 var res = new RegExp(e).test(faves);
		if(!res){
			faves.push(e)
			connect.send("VKWebAppStorageSet", {"key": "faves", "value": faves.join('^')});
			setSnackbar( <Snackbar
				layout="vertical"
				duration={2000}
				onClose={() => setSnackbar(null)}
				before={<Avatar size={24} style={{backgroundColor: '#4bb34b'}}><Icon24Favorite fill="#fff" width={14} height={14} /></Avatar>}
			>
				Поздравление добавлено в избранное!
			</Snackbar>);
			connect.send("VKWebAppTapticNotificationOccurred", {"type": "success"});
			setZero(false);
		} else {
			console.log('одно и тоже добавляешь блять)')
			setSnackbar( <Snackbar
				duration={2000}
        layout="vertical"
        onClose={() => setSnackbar(null)}
        before={<Avatar size={24} style={{backgroundColor: '#FF0000'}}><Icon16Clear fill="#fff" width={14} height={14} /></Avatar>}
      >
        Поздравление уже в избранном.
      </Snackbar>);
			connect.send("VKWebAppTapticNotificationOccurred", {"type": "error"});
		}
	 }
	 const updFavDel = e => {
		 if(!window.navigator.onLine) {
			 setSnackbar( <Snackbar
 				duration={2000}
         layout="vertical"
         onClose={() => setSnackbar(null)}
         before={<Avatar size={24} style={{backgroundColor: '#FF0000'}}><Icon16Clear fill="#fff" width={14} height={14} /></Avatar>}
       >
         Отсутствует подключение к интернету.
       </Snackbar>);
 			connect.send("VKWebAppTapticNotificationOccurred", {"type": "error"});
			 return;
		 }
		connect.send("VKWebAppTapticNotificationOccurred", {"type": "success"});
	  let a = faves.join('^').replace(e, '');
		connect.send("VKWebAppStorageSet", {"key": "faves", "value": a});
		a = a.split('^').filter(e => e !== '');
		if(a.length === 0) setZero(true);
		setFaves(a);
		setSnackbar(<Snackbar
				duration={2000}
        onClose={() => setSnackbar(null)}
        before={<Avatar size={24} style={{backgroundColor: '#e64646'}}><Icon24Favorite fill="#fff" width={14} height={14} /></Avatar>}
      >
        Поздравление удалено из избранного.
      </Snackbar>);
	}

	const copied = e => {
		setSnackbar( <Snackbar
		 layout="vertical"
		 onClose={() => setSnackbar(null)}
		 before={<Avatar size={24} style={{backgroundColor: '#4bb34b'}}><Icon16Done fill="#fff" width={14} height={14} /></Avatar>}
	 >
		 Поздравление скопировано!
	 </Snackbar>);
	 connect.send("VKWebAppTapticNotificationOccurred", {"type": "success"});
	}

	const setPopoutF = e => {
		setPopout(e);
	}

	const props = { go, updFav, popout, snackbar, zero, faves, setPopoutF, updFavDel, copied, share, back, fetchedUser};
	const views = { activePanel };

	return (
		<ConfigProvider>
			<Epic activeStory={activeStory} tabbar={
							<Tabbar>
								<TabbarItem
									text="Поздравления"
									onClick={ () => back()}
									selected={ activeStory !== 'fave' && activeStory !== 'settings'}
								><Icon24Gift/></TabbarItem>
								<TabbarItem
									text="Избранное"
									onClick={ () => go('fave') }
									selected={ activeStory === 'fave' }
								>{activeStory === 'fave' ? <Icon24Favorite /> : <Icon24FavoriteOutline />}</TabbarItem>
								<TabbarItem
									text="Настройки"
									onClick={ () => go('settings') }
									selected={ activeStory === 'settings' }
								><Icon24Favorite/></TabbarItem>
							</Tabbar>
						}>
						<View popout={popout} history={activePanel === 'home' ? ['home'] : ['home', '']} onSwipeBack={() => go('home')} id="home" {...views} >
							<Home id="home" {... props}/>
							<NY id="ny" {... props}/>
							<Krsh id="krsh" {... props}/>
							<Oil id="oil" {... props}/>
							<May9 id="may9" {... props}/>
							<Feb23 id="feb23" {... props}/>
							<Pascha id="pascha" {... props}/>
							<Martch8 id="martch8" {... props}/>
							<DayKnowns id="dayknowns" {... props}/>
							<Birthday id="birthday" {... props}/>
							<Mother id="mother" {... props}/>
							<Love id="love" {... props}/>
						</View>
						<View id="fave" popout={popout} activePanel='fave' >
							<Fave id='fave' {... props} />
						</View>
						<View id="settings" popout={popout} activePanel='settings' >
							<Settings id='settings' {... props} />
						</View>
					</Epic>
			</ConfigProvider>

	);
}




export default App;
