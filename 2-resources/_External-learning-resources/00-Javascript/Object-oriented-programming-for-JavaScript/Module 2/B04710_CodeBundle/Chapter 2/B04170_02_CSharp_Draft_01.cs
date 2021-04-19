class Circle
{
}


class Circle: System.Object
{
}



class Circle
{
    private double radius;

    public Circle(double radius)
    {
        Console.WriteLine(String.Format("I'm initializing a new Circle instance with a radius value of {0}.", radius));
        this.radius = radius;
    }
}



class Chapter01
{
    public static void Main(string[] args)
    {
        var circle1 = new Circle(25);
        var circle2 = new Circle(50);
        Console.ReadLine();
    }
}




circle1.GetType().BaseType.ToString()



class Circle
{
    private double radius;

    public Circle(double radius)
    {
        Console.WriteLine(String.Format("I'm initializing a new Circle instance with a radius value of {0}.", radius));
        this.radius = radius;
    }

    ~Circle()
    {
        Console.WriteLine(String.Format("I'm destroying the Circle instance with a radius value of {0}.", radius));
    }
}



class Circle
{
    private double radius;

    public Circle(double radius)
    {
        Console.WriteLine(String.Format("I'm initializing a new Circle instance with a radius value of {0}.", radius));
        this.radius = radius;
    }

    ~Circle()
    {
        Console.WriteLine(String.Format("I'm destroying the Circle instance with a radius value of {0}.", radius));
    }

    public double CalculateArea()
    {
        return Math.PI * Math.Pow(this.radius, 2);
    }
}



class Chapter01
{
    public static void Main(string[] args)
    {
        var circle1 = new Circle(25f);
        var circle2 = new Circle(50f);
        Console.WriteLine(String.Format("The area for circle #1 is {0}", circle1.CalculateArea()));
        Console.WriteLine(String.Format("The area for circle #2 is {0}", circle2.CalculateArea()));
        Console.ReadLine();
    }
}



class Chapter01
{
    private static double CalculateCircleArea(double radius)
    {
        return new Circle(radius).CalculateArea();
    }

    static void Main(string[] args)
    {
        double radius = 50;
        Console.WriteLine(String.Format("The area for a circle with a radius of {0} is {1} ", radius, CalculateCircleArea(radius)));
        Console.ReadLine();
    }
}
