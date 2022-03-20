public class Method1 {
    public static void main(String[] args) {
        display("Hello World");
        plus(10,2);
        String txt =  getText();
        display(txt);
        int[] arrT = {0, 1, 2, 3, 4, 5};
        dispArray(arrT);
    }
    private static void display(String text){
        System.out.println(text);
    }
    private static void plus(int a, int b){
        System.out.println(a+b);
    }
    private static String getText(){
        return "TEXT 123!";
    }
    private static void dispArray(int[] arr){
        for (int i = 0;i<arr.length;i++){
            display(i + " : " + arr[i]);
            String x = String.valueOf("-------");
            display(x);
        }
    }
}
