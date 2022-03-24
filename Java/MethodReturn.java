public class MethodReturn {
    public static void main(String[] args) {
        connectServer(30);
        connectServer(300);
    }
    public static void connectServer(int ping){
        System.out.println("Ping = " + ping);
        if (ping>100) return;
        System.out.println("Connected");
    }
}
