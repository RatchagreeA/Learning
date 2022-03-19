import java.util.Scanner;
public class IfStatement {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Age : ");
        int x = sc.nextInt();
        if (x>20){
            System.out.println("Drink time!");
        }else if (x>15){
            System.out.println("Play time!");        
        }else{
            System.out.println("Sleeping time!");
        }
    }
    
}
