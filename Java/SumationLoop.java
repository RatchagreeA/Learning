import java.util.Scanner;

public class SumationLoop {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.print("Sum to : ");
        int limit = sc.nextInt();
        int sum = 0;        
        for(int i = 1;i<=limit;i++){
            sum+=i;
        }
        System.out.println(sum);
    }
    
}
