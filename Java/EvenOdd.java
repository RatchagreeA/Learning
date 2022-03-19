import java.util.Scanner;
public class EvenOdd {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Input : ");
        int n = sc.nextInt();
        // if (n%2 == 0){
        //     System.out.println(n + " is Even number");
        // }else{
        //     System.out.println(n + " is Odd number");
        // }

        String txt = (n%2==0) ? n + " is Even number" : n + " is Odd number";
        System.out.println(txt);
    }
    
}
