import java.util.InputMismatchException;
import java.util.Scanner;
public class ExceptionDemo1 {
    public static void main(String[] args) {
        try{
            // int a = 10;
            // int b = 2;
            // int c = a/b;
            // System.out.println(c);

            int [] d = {12,13,14};
            System.out.println(d[9]);
            
            // Scanner sc = new Scanner(System.in);
            // System.out.print("Input 1 : " );
            // int in1 = sc.nextInt();
            // System.out.println("Input 1 = " + in1);
        
        } catch (ArithmeticException e){
            System.out.println("Divide by zero");
        } catch (ArrayIndexOutOfBoundsException e){
            System.out.println("Index Out Of Bounds");
        } catch (InputMismatchException e){
            System.out.println("Input Mismatch");
        } catch (Exception e){
            System.out.println("------------------------");
            e.printStackTrace();
            System.out.println("------------------------");
        } finally {
            System.out.println("Keep working");
        }
        

        

    }
    
}
