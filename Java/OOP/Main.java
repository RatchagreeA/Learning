public class Main {
    public static void main(String[] args) {
        
        Employee e1 = new Employee(); //create object
        e1.setID("1");
        e1.setName("Bob");
        e1.setSalary(5000.0);
        // e1.dispEmployee();
        System.out.println(e1.getName());

        Employee e2 = new Employee(); //create object
        e2.setID("2");
        e2.setName("May");
        e2.setSalary(15000.0);
        // e2.dispEmployee();
        System.out.println(e2.getName());

    }
}
