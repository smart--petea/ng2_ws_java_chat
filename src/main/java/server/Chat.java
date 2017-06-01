package server;


import com.corundumstudio.socketio.*;
import com.corundumstudio.socketio.listener.ConnectListener;


/**
 * Created by root on 5/25/17.
 */
public class Chat {
  public static void main(String[] args) throws InterruptedException {
    Configuration config = new Configuration();
    config.setPort(20011);
    config.setHostname("localhost");

    final SocketIOServer server = new SocketIOServer(config);
    final SocketIONamespace roomNamespace = server.addNamespace("/room");

    roomNamespace.addConnectListener(new ConnectListener() {
      public void onConnect(SocketIOClient socketIOClient) {
        System.out.println("connected");
      }
    });

    server.start();
    Thread.sleep(Integer.MAX_VALUE);
    server.stop();
  }
}
