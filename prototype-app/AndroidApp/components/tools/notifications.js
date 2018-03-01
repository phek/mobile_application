import PushNotification from 'react-native-push-notification';

PushNotification.configure({
    onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
    },
    popInitialNotification: true,
    requestPermissions: true
});

export function scheduleNotification(message, sec = 0) {
    const notification = {
        message: message,
        playSound: false,
        date: new Date(Date.now() + (sec * 1000))
    };
    PushNotification.localNotificationSchedule(notification);
}