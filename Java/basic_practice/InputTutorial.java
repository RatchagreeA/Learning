// import class Scanner
import java.util.Scanner;

public class InputTutorial {
    public static void main(String[] args) {
        
        // Create object | new
        Scanner sc = new Scanner(System.in);

        System.out.print("Name ? ");
        String name1 = sc.nextLine(); //get string (get input until new)
        System.out.println("Name1 : " + name1);

        System.out.print("Name2 ? ");
        String name2 = sc.next(); //get string (get input until white space)
        System.out.println("Name2 : " + name2);

        System.out.print("Year ? ");
        int year = sc.nextInt(); //get integer
        System.out.println("Year : " + year);

    }
}
