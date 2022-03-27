public class DataAlgo {
    public static void main(String[] args) {
        
        for (int n = 300;n<=1000000;n*=2){
            long startTime = System.nanoTime();
            // int result1 = summation1(n);
            int result2 = summation2(n);
            long endTime = System.nanoTime();
            long diffTime = endTime - startTime;
            System.out.println("n = " + n + " Time = " + diffTime + " nano sec");
        }
    }
    public static int summation1(int n ){
        int total = 0;
        for (int i=1;i<=n;i++){
            total += i;
        }
        return total;
    }
    public static int summation2(int n){
        return (n/2)*(n+1);
    }
    // O(2^n)
    public static int fibonacci(int n){
        if (n<=1) return n;
        else return fibonacci(n-2) + fibonacci(n-1);
    }
    // O()
    public static int factorial(int n){
        if (n==1) return 1;
        else return n * factorial(n-1);
    }
}
