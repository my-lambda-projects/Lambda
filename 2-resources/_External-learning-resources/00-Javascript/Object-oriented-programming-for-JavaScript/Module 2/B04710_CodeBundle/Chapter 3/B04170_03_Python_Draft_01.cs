class SmoothFoxTerrier
{
    public static string Family = "Terrier";
    public static string AreaOfOrigin = "England";
    public static int Energy = 10;
    public static int ColdTolerance = 8;
    public static int HeatTolerance = 8;

    public string Name;
    public int WatchdogAbility;
    public string FavoriteToy;

    public SmoothFoxTerrier(string name, int watchdogAbility, string favoriteToy)
    {
        this.Name = name;
        this.WatchdogAbility = watchdogAbility;
        this.FavoriteToy = favoriteToy;
    }
}



Debug.WriteLine(SmoothFoxTerrier.Family);



SmoothFoxTerrier.Energy = 8;



class SmoothFoxTerrier
{
    public static string Family = "Terrier";
    public static string AreaOfOrigin = "England";
    public const int Energy = 10;
    public static int ColdTolerance = 8;
    public static int HeatTolerance = 8;

    public string Name;
    public int WatchdogAbility;
    public string FavoriteToy;

    public SmoothFoxTerrier(string name, int watchdogAbility, string favoriteToy)
    {
        this.Name = name;
        this.WatchdogAbility = watchdogAbility;
        this.FavoriteToy = favoriteToy;
    }
}



class SmoothFoxTerrier
{
    public static string Family = "Terrier";
    public static string AreaOfOrigin = "England";
    public static int Energy = 10;
    public static int ColdTolerance = 8;
    public static int HeatTolerance = 8;

    protected string _name;
    protected int _watchdogAbility;
    protected string _favoriteToy;

    public SmoothFoxTerrier(string name, int watchdogAbility, string favoriteToy)
    {
        this._name = name;
        this._watchdogAbility = watchdogAbility;
        this._favoriteToy = favoriteToy;
    }
}



class SmoothFoxTerrier
{
    public static string Family = "Terrier";
    public static string AreaOfOrigin = "England";
    public static int Energy = 10;
    public static int ColdTolerance = 8;
    public static int HeatTolerance = 8;

    private string _name;
    private int _watchdogAbility;
    private string _favoriteToy;

    public SmoothFoxTerrier(string name, int watchdogAbility, string favoriteToy)
    {
        this._name = name;
        this._watchdogAbility = watchdogAbility;
        this._favoriteToy = favoriteToy;
    }
}



class SmoothFoxTerrier
{
    public static string Family = "Terrier";
    public static string AreaOfOrigin = "England";
    public static int Energy = 10;
    public static int ColdTolerance = 8;
    public static int HeatTolerance = 8;

    private string _name;
    private int _watchdogAbility;
    private string _favoriteToy;

    public string Name 
    {
        get
        {
            return _name;
        }
    }

    public SmoothFoxTerrier(string name, int watchdogAbility, string favoriteToy)
    {
        this._name = name;
        this._watchdogAbility = watchdogAbility;
        this._favoriteToy = favoriteToy;
    }
}



var jerry = new SmoothFoxTerrier("Jerry", 7, "Boomerang");
jerry.Name = "Tom";



class SmoothFoxTerrier
{
    public static string Family = "Terrier";
    public static string AreaOfOrigin = "England";
    public static int Energy = 10;
    public static int ColdTolerance = 8;
    public static int HeatTolerance = 8;

    private string _name;
    private int _watchdogAbility;
    private string _favoriteToy;

    public string Name 
    {
        get
        {
            return _name;
        }
    }

    public string FavoriteToy
    {
        get 
        {
            return this._favoriteToy;
        }

        set 
        {
            this._favoriteToy = value;
        }
    }

    public SmoothFoxTerrier(string name, int watchdogAbility, string favoriteToy)
    {
        this._name = name;
        this._watchdogAbility = watchdogAbility;
        this._favoriteToy = favoriteToy;
    }
}



class SmoothFoxTerrier
{
    public static string Family = "Terrier";
    public static string AreaOfOrigin = "England";
    public static int Energy = 10;
    public static int ColdTolerance = 8;
    public static int HeatTolerance = 8;

    private string _name;
    private int _watchdogAbility;
    private string _favoriteToy;

    public string Name 
    {
        get
        {
            return _name;
        }
    }

    public string FavoriteToy
    {
        get 
        {
            return this._favoriteToy;
        }

        set 
        {
            this._favoriteToy = value;
        }
    }

    public int WatchdogAbility
    {
        get
        {
            return this._watchdogAbility;
        }
        set 
        {
            if (value < 0) {
                this._watchdogAbility = 0;
            } else if (value > 10) {
                this._watchdogAbility = 10;
            } else {
                this._watchdogAbility = value;
            }
        }
    }

    public SmoothFoxTerrier(string name, int watchdogAbility, string favoriteToy)
    {
        this._name = name;
        this._watchdogAbility = watchdogAbility;
        this._favoriteToy = favoriteToy;
    }
}



var tom = new SmoothFoxTerrier("Tom", 8, "Boomerang");
tom.WatchdogAbility = -9;
Console.WriteLine(tom.WatchdogAbility);
tom.WatchdogAbility = 52;
Console.WriteLine(tom.WatchdogAbility);
tom.WatchdogAbility = 9;
Console.WriteLine(tom.WatchdogAbility);



class SmoothFoxTerrier
{
    public static string Family = "Terrier";
    public static string AreaOfOrigin = "England";
    public static int Energy = 10;
    public static int ColdTolerance = 8;
    public static int HeatTolerance = 8;

    private string _name;
    private int _watchdogAbility;
    private string _favoriteToy;

    public string Name 
    {
        get
        {
            return _name;
        }
    }

    public string FavoriteToy
    {
        get 
        {
            return this._favoriteToy;
        }

        set 
        {
            this._favoriteToy = value;
        }
    }

    public int WatchdogAbility
    {
        get
        {
            return this._watchdogAbility;
        }
        set 
        {
            if (value < 0) {
                this._watchdogAbility = 0;
            } else if (value > 10) {
                this._watchdogAbility = 10;
            } else {
                this._watchdogAbility = value;
            }
        }
    }

    public int ProtectionScore
    {
        get 
        {
            return (int)Math.Floor ((this._watchdogAbility + SmoothFoxTerrier.ColdTolerance + SmoothFoxTerrier.HeatTolerance) / 3d);
        }
    }

    public SmoothFoxTerrier(string name, int watchdogAbility, string favoriteToy)
    {
        this._name = name;
        this._watchdogAbility = watchdogAbility;
        this._favoriteToy = favoriteToy;
    }
}



var laura = new SmoothFoxTerrier("Laura", "Old sneakers", 9);
console.WriteLine(laura.ProtectionScore);



class SmoothFoxTerrier
{
    public static string Family = "Terrier";
    public static string AreaOfOrigin = "England";
    public const int Energy = 10;
    public static int ColdTolerance = 8;
    public static int HeatTolerance = 8;

    private string _name;
    private int _watchdogAbility;
    private string _favoriteToy;

    public string Name 
    {
        get
        {
            return this._name;
        }
    }

    public string FavoriteToy
    {
        get 
        {
            return this._favoriteToy;
        }

        set 
        {
            this._favoriteToy = value;
        }
    }

    public int WatchdogAbility
    {
        get
        {
            return this._watchdogAbility;
        }
        set 
        {
            if (value < 0) {
                this._watchdogAbility = 0;
            } else if (value > 10) {
                this._watchdogAbility = 10;
            } else {
                this._watchdogAbility = value;
            }
        }
    }

    public int ProtectionScore
    {
        get 
        {
            return Math.Floor ((this._watchdogAbility + SmoothFoxTerrier.ColdTolerance + SmoothFoxTerrier.HeatTolerance) / 3);
        }
    }

    public SmoothFoxTerrier(string name, int watchdogAbility, string favoriteToy)
    {
        this._name = name;
        this._watchdogAbility = watchdogAbility;
        this._favoriteToy = favoriteToy;
    }
}



class SmoothFoxTerrier
{
    public static string Family = "Terrier";
    public static string AreaOfOrigin = "England";
    public const int Energy = 10;
    public static int ColdTolerance = 8;
    public static int HeatTolerance = 8;

    private string _name;
    private int _watchdogAbility;

    public string Name 
    {
        get
        {
            return this._name;
        }
    }

    public string FavoriteToy { get; set; } 

    public int WatchdogAbility
    {
        get
        {
            return this._watchdogAbility;
        }
        set 
        {
            if (value < 0) {
                this._watchdogAbility = 0;
            } else if (value > 10) {
                this._watchdogAbility = 10;
            } else {
                this._watchdogAbility = value;
            }
        }
    }

    public int ProtectionScore
    {
        get 
        {
            return Math.Floor ((this._watchdogAbility + SmoothFoxTerrier.ColdTolerance + SmoothFoxTerrier.HeatTolerance) / 3);
        }
    }

    public SmoothFoxTerrier(string name, int watchdogAbility, string favoriteToy)
    {
        this._name = name;
        this._watchdogAbility = watchdogAbility;
        this.FavoriteToy = favoriteToy;
    }
}



class SmoothFoxTerrier
{
    public static string Family = "Terrier";
    public static string AreaOfOrigin = "England";
    public const int Energy = 10;
    public static int ColdTolerance = 8;
    public static int HeatTolerance = 8;

    private int _watchdogAbility;

    public string Name { get; private set; }

    public string FavoriteToy { get; set; } 

    public int WatchdogAbility
    {
        get
        {
            return this._watchdogAbility;
        }
        set 
        {
            if (value < 0) {
                this._watchdogAbility = 0;
            } else if (value > 10) {
                this._watchdogAbility = 10;
            } else {
                this._watchdogAbility = value;
            }
        }
    }

    public int ProtectionScore
    {
        get 
        {
            return Math.Floor ((this._watchdogAbility + SmoothFoxTerrier.ColdTolerance + SmoothFoxTerrier.HeatTolerance) / 3);
        }
    }

    public SmoothFoxTerrier(string name, int watchdogAbility, string favoriteToy)
    {
        this.Name = name;
        this._watchdogAbility = watchdogAbility;
        this.FavoriteToy = favoriteToy;
    }
}



class MutableVector3D
{
    public double X { get; set; }
    public double Y { get; set; }
    public double Z { get; set; }

    public void Sum(double deltaX, double deltaY, double deltaZ)
    {
        this.X += deltaX;
        this.Y += deltaY;
        this.Z += deltaZ;
    }

    public MutableVector3D(double x, double y, double z)
    {
        this.X = x;
        this.Y = y;
        this.Z = z;
    }
}



class MutableVector3D
{
    public double X { get; set; }
    public double Y { get; set; }
    public double Z { get; set; }

    public void Sum(double deltaX, double deltaY, double deltaZ)
    {
        this.X += deltaX;
        this.Y += deltaY;
        this.Z += deltaZ;
    }

    public MutableVector3D(double x, double y, double z)
    {
        this.X = x;
        this.Y = y;
        this.Z = z;
    }

    public static MutableVector3D OriginVector()
    {
        return new MutableVector3D(0, 0, 0);
    }
}



var mutableVector3D = MutableVector3D.OriginVector();
mutableVector3D.Sum(5, 10, 15);
Console.WriteLine(mutableVector3D.X, mutableVector3D.Y, mutableVector3D.Z)



class ImmutableVector3D
{
    public double X { get; private set; }
    public double Y { get; private set; }
    public double Z { get; private set; }

    public ImmutableVector3D Sum(double deltaX, double deltaY, double deltaZ)
    {
        return new ImmutableVector3D (
            this.X + deltaX,
            this.Y + deltaY,
            this.Z + deltaZ);
    }

    public ImmutableVector3D(double x, double y, double z)
    {
        this.X = x;
        this.Y = y;
        this.Z = z;
    }

    public static ImmutableVector3D EqualElementsVector(double initialValue)
    {
        return new ImmutableVector3D(initialValue, initialValue, initialValue);
    }

    public static ImmutableVector3D OriginVector()
    {
        return ImmutableVector3D.EqualElementsVector(0);
    }
}



var vector0 = ImmutableVector3D.OriginVector();
var vector1 = vector0.Sum(5, 10, 15);
Console.WriteLine(vector1.X, vector1.Y, vector1.Z);
