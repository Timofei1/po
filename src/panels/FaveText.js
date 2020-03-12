import React from 'react';
import { Div, Group, Button, ActionSheet, IS_PLATFORM_IOS, ActionSheetItem } from "@vkontakte/vkui"
import connect from '@vkontakte/vk-bridge';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon24Copy from '@vkontakte/icons/dist/24/copy';
import Icon24ShareOutline from '@vkontakte/icons/dist/24/share_outline';
import './Persik.css'

const Text = (props) => {

    const { id, faves, updFavDel, share, copied, setPopoutF } = props;

    const openShareActionSheet = (e) => {
      setPopoutF(<ActionSheet onClose={() => setPopoutF(null)}>
   <ActionSheetItem onClick={ () => share(e) } autoclose>
     На свою стену
   </ActionSheetItem>
   <ActionSheetItem onClick={ () => shareToFriend(e) } autoclose>
     На стену друга
   </ActionSheetItem>
   {IS_PLATFORM_IOS && <ActionSheetItem autoclose theme="cancel">Отменить</ActionSheetItem>}
  </ActionSheet>);
    }

    const shareToFriend = async e => {
      const data = await connect.sendPromise("VKWebAppGetFriends", {});
      const id = data.users[0].id;
      if(id) share(e, id);
    }


        return (
          <>
          {faves[id] && <Group> <Div>
          {faves[id]}
          </Div>
          <Div className='select'>
          <Button mode='secondary' onClick={() => {
             connect.send("VKWebAppCopyText", { text: faves[id] });
             copied();
          }}  size="l" stretched ><Icon24Copy width={22} height={22}/></Button>
           <Button style={{marginLeft: '5px' }} mode='secondary' onClick={() => {
             openShareActionSheet(faves[id]);
          }}  size="l" stretched ><Icon24ShareOutline width={22} height={22}/></Button>
          <Button style={{marginLeft: '5px'}} mode='secondary' onClick={() => {
             updFavDel(faves[id]);
         }}  size="l" stretched ><Icon24Favorite width={22} height={22}/></Button>
            </Div> </Group>}
            </>
        );

}

export default Text;
