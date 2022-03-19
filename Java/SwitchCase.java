import java.util.Scanner;

public class SwitchCase {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Month number : ");
        int month = sc.nextInt();
        
        String result;
        switch (month) {
            case 1:
                result = "January";
                break;
            case 2:
                result = "February";
                break;
            case 3:
                result = "March";
                break;
            default:
                result = "Not found";
                break;
        }
        System.out.println(result);

    }
    
}
