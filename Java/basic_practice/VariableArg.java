public class VariableArg {
    public static void main(String[] args) {
        summation(5, 6);
        summation(5, 6, 7);
    }
    // public static void summation(int a, int b){
    //     int sum = a + b;
    //     System.out.println(sum);
    // }
    // public static void summation(int a, int b, int c){
    //     int sum = a + b + c;
    //     System.out.println(sum);
    // }
    public static void summation(int...number){
        int sum = 0;
        for (int i=0;i<number.length;i++){
            sum+=number[i];
        }
        System.out.println("summation = " + sum);
    }
}
