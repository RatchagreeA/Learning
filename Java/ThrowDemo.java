import java.util.Scanner;

public class ThrowDemo {
    static int balance = 5000;
    public static void main(String[] args) {
        try{
            
            Scanner sc = new Scanner(System.in);
            System.out.print("Input 1 : ");
            int amount = sc.nextInt();
            withDraw(amount);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    public static void withDraw(int amount) throws Exception{
        if (amount<=0){
            throw new Exception("Less than zero");
        }
        if(amount>balance){
            throw new Exception("not enough");
        }
        balance -= amount;
        System.out.println("Withdraw = " + amount);
        System.out.println("Balance = " + balance);
    }
    
}
