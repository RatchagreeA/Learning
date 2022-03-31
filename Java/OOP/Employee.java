class Employee{
    //Attribute
    private String id;
    private String name;
    private Double salary;
    
    // static attribute
    static int minSalary = 12000;

    // default constructor
    public Employee(){
        System.out.println("Create object complete");
    }
    public Employee(String name, Double salary){
        this.name = name;
        this.salary = salary;
        dispEmployee();
    }
    public Employee(String id, String name, Double salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
        dispEmployee();
    }

    // method
    public void setID(String id){
        this.id = id;
    }
    public void setName(String name){
        this.name = name;
    }
    public void setSalary(Double salary){
        this.salary = salary;
    }
    public void dispEmployee(){
        // System.out.println("ID = " + this.id);
        System.out.println("Name = " + this.name);
        System.out.println("Salary = " + this.salary);
    }
    public String getID(){
        return this.id;
    }
    public String getName(){
        return this.name;
    }
    public Double getSalary(){
        return this.salary;
    }
}