public class Main {
    public static void main(String[] args) {
        
        Employee e1 = new Employee("1","John",30000.0); //create object
        e1.dispEmployee();

        Employee e2 = new Employee("2","Bob"); //create object
        e2.dispEmployee();
        Employee e3 = new Employee(); //create object
        e3.dispEmployee();


    }
}
