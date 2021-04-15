using System; 
using System.Linq; 
using System.Text;

public abstract class Animal 
{ 
    protected virtual int NumberOfLegs { get { return 0; } } 
    protected virtual int PairsOfEyes { get { return 0; } } 
 
    public int Age { get; set; } 
 
    public Animal(int age) 
    { 
        this.Age = age; 
        Console.WriteLine("Animal created."); 
    } 
 
    public void PrintLegsAndEyes() 
    { 
        Console.WriteLine( 
            String.Format("I have {0} legs and {1} eyes.",  
                this.NumberOfLegs,  
                this.PairsOfEyes * 2)); 
    } 
 
    public void PrintAge() 
    { 
        Console.WriteLine( 
            String.Format("I am {0} years old."), 
                this.Age); 
    } 
} 



using System; 
using System.Linq; 
using System.Text; 

public abstract class Mammal: Animal 
{ 
    protected override int PairsOfEyes { get { return 1; } } 
    public bool IsPregnant { get; set; } 
 
    private void Init(bool isPregnant) 
    { 
        this.IsPregnant = isPregnant; 
        Console.WriteLine("Mammal created."); 
    } 
 
    public Mammal(int age) : base(age) 
    { 
        this.Init(false);  
    } 
 
    public Mammal(int age, bool isPregnant) : base(age) 
    { 
        this.Init(isPregnant); 
    } 
}



using System; 
using System.Linq; 
using System.Text; 

public abstract class DomesticMammal: Mammal 
{ 
    public string Name { get; private set; } 
    public string FavoriteToy { get; set; } 
 
    private void Init(string name, string favoriteToy) 
    { 
        this.Name = name; 
        this.FavoriteToy = favoriteToy; 
        Console.WriteLine("DomesticMammal created."); 
    } 
 
    public virtual void Talk()  
    { 
        Console.WriteLine(String.Format("{0}: talks", this.Name));         
    } 
 
    public DomesticMammal(string name, int age, string favoriteToy) 
        : base(age) 
    { 
        this.Init(name, favoriteToy); 
    } 
 
    public DomesticMammal(string name, int age, string favoriteToy, bool isPregnant) 
        : base(age, isPregnant) 
    { 
        this.Init(name, favoriteToy); 
    } 
} 



using System; 
using System.Linq; 
using System.Text; 

public class Dog : DomesticMammal
{
    protected override int NumberOfLegs { get { return 4; } }
    public virtual string Breed { get { return "Just a dog"; } }
    public virtual string BreedFamily { get { return "Dog"; } }

    private void Init()
    {
        Console.WriteLine("Dog created.");
    }

    public Dog(string name, int age, string favoriteToy, bool isPregnant): base(name, age, favoriteToy, isPregnant)
    {
        this.Init();
    }

    public Dog(string name, int age, string favoriteToy)
        : base(name, age, favoriteToy)
    {
        this.Init();
    }

    public void PrintBreed()
    {
        Console.WriteLine(this.Breed);
    }

    public void PrintBreedFamily()
    {
        Console.WriteLine(this.BreedFamily);
    }

    private void PrintBark(int times, DomesticMammal otherDomesticMammal, bool isAngry)
    {
        var sb = new StringBuilder();
        sb.Append(this.Name);
        if (otherDomesticMammal != null)
        {
            sb.Append(String.Format(" to {0}: ", otherDomesticMammal.Name));
        }
        else
        {
            sb.Append(": ");
        }

        if (isAngry)
        {
            sb.Append("Grr ");
        }
            
        sb.Append(string.Concat(Enumerable.Repeat("Woof ", times)));
        Console.WriteLine(sb.ToString());
    }

    public void Bark()
    {
        this.PrintBark(1, null, false);
    }

    public void Bark(int times)
    {
        this.PrintBark(times, null, false);
    }

    public void Bark(int times, DomesticMammal otherDomesticMammal)
    {
        this.PrintBark(times, otherDomesticMammal, false);
    }

    public void Bark(int times, DomesticMammal otherDomesticMammal, bool isAngry)
    {
        this.PrintBark(times, otherDomesticMammal, isAngry);
    }

    public override void Talk()
    {
        this.Bark();
    }
}



using System; 
using System.Linq; 
using System.Text; 

public class TerrierDog : Dog
{
    public override string Breed { get { return "Terrier dog"; } }
    public override string BreedFamily { get { return "Terrier"; } }

    private void Init()
    {
        Console.WriteLine("TerrierDog created.");
    }

    public TerrierDog(string name, int age, string favoriteToy)
        : base(name, age, favoriteToy)
    {
        this.Init();
    }

    public TerrierDog(string name, int age, string favoriteToy, bool isPregnant)
        : base(name, age, favoriteToy, isPregnant)
    {
        this.Init();
    }
}



using System; 
using System.Linq; 
using System.Text; 

public class SmoothFoxTerrier : TerrierDog
{
    public override string Breed { get { return "Smooth Fox Terrier"; } }

    private void Init()
    {
        Console.WriteLine("Smooth Fox Terrier created.");
    }

    public SmoothFoxTerrier(string name, int age, string favoriteToy)
        : base(name, age, favoriteToy)
    {
        this.Init();
    }

    public SmoothFoxTerrier(string name, int age, string favoriteToy, bool isPregnant)
        : base(name, age, favoriteToy, isPregnant)
    {
        this.Init();
    }
}



using System; 
using System.Linq; 
using System.Text;

public abstract class Animal 
{ 
    protected virtual int NumberOfLegs { get { return 0; } } 
    protected virtual int PairsOfEyes { get { return 0; } } 

    public int Age { get; set; } 
 
    public Animal(int age) 
    { 
        this.Age = age; 
        Console.WriteLine("Animal created."); 
    } 
 
    public void PrintLegsAndEyes() 
    { 
        Console.WriteLine( 
            String.Format("I have {0} legs and {1} eyes.",  
                this.NumberOfLegs,  
                this.PairsOfEyes * 2)); 
    } 
 
    public void PrintAge() 
    { 
        Console.WriteLine( 
            String.Format("I am {0} years old."), 
                this.Age); 
    } 

    public static bool operator <(Animal self, Animal other)
    {
        return self.Age < other.Age;
    }

    public static bool operator <=(Animal self, Animal other)
    {
        return self.Age <= other.Age;
    }

    public static bool operator >(Animal self, Animal other)
    {
        return self.Age > other.Age;
    }

    public static bool operator >=(Animal self, Animal other)
    {
        return self.Age >= other.Age;
    }
}



var tom = new SmoothFoxTerrier("Tom", 5, "Sneakers");
tom.PrintBreed();
tom.PrintBreedFamily();



tom is Animal
tom is Mammal
tom is DomesticMammal
tom is Dog
tom is TerrierDog
tom is SmoothFoxTerrier



var pluto = new SmoothFoxTerrier("Pluto", 6, "Tennis ball", false);
var goofy = new SmoothFoxTerrier("Goofy", 8, "Soda bottle", false);



Console.WriteLine(tom > pluto);
Console.WriteLine(tom < pluto);
Console.WriteLine(goofy >= tom);
Console.WriteLine(tom <= goofy);



tom.Bark();
tom.Bark(2);
tom.Bark(2, pluto);
tom.Bark(3, pluto, true);
