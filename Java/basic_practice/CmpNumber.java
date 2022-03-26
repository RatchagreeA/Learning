import java.util.Scanner;
public class CmpNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Input 1 : ");
        int n1 = sc.nextInt();
        System.out.print("Input 2 : ");
        int n2 = sc.nextInt();

        if (n1 > n2){
            System.out.println(n1 + " more than " + n2);
        }else if (n1 < n2){
            System.out.println(n1 + " less than " + n2);
        }else {
            System.out.println(n1 + " equal to " + n2);
        }
        
    }
    
}
