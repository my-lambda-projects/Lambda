using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chapter8
{
    public class Vector3D
    {
        public int X { get; set; }
        public int Y { get; set; }
        public int Z { get; set; }

        public Vector3D(int x, int y, int z)
        {
            this.X = x;
            this.Y = y;
            this.Z = z;
        }
    }


    public interface ISceneElement
    {
        Vector3D Location { get; set; }
    }

    public abstract class SceneElement : ISceneElement
    {
        public Vector3D Location { get; set; }

        public SceneElement(Vector3D location)
        {
            this.Location = location;
        }
    }

    public abstract class Light : SceneElement
    {
        public Light(Vector3D location)
            : base(location)
        {

        }
    }

    public class DirectionalLight : Light
    {
        public int Color { get; set; }

        public DirectionalLight(Vector3D location, int color)
            : base(location)
        {
            this.Color = color;
        }
    }

    public abstract class Camera : SceneElement
    {
        public Camera(Vector3D location)
            : base(location)
        {
        }
    }

    public class PerspectiveCamera : Camera
    {
        public Vector3D Direction { get; set; }
        public Vector3D Vector { get; set; }
        public int FieldOfView { get; set; }
        public int NearClippingPlane { get; set; }
        public int FarClippingPlane { get; set; }

        public PerspectiveCamera(Vector3D location, Vector3D direction, Vector3D vector, int fieldOfView, int nearClippingPlane, int farClippingPlane)
            : base(location)
        {
            this.Direction = direction;
            this.Vector = vector;
            this.FieldOfView = fieldOfView;
            this.NearClippingPlane = nearClippingPlane;
            this.FarClippingPlane = farClippingPlane;
        }
    }

    public abstract class Shape: SceneElement
    {
        public Shape(Vector3D location)
            : base(location)
        {
        }

        public abstract void Render(Camera camera, List<Light> lights);
    }

    public class Sphere : Shape
    {
        public int Radius { get; set; }
        
        public Sphere(Vector3D location, int radius)
            : base(location)
        {
            this.Radius = radius;
        }

        public override void Render(Camera camera, List<Light> lights)
        {
            Console.WriteLine("Rendering a sphere.");
        }
    }

    public class Cube : Shape
    {
        public int EdgeLength { get; set; }

        public Cube(Vector3D location, int edgeLength)
            : base(location)
        {
            this.EdgeLength = edgeLength;
        }

        public override void Render(Camera camera, List<Light> lights)
        {
            Console.WriteLine("Rendering a cube.");
        }
    }

    public class Scene
    {
        protected List<Light> _lights;
        protected List<Shape> _shapes;
        protected Camera _activeCamera;
        
        public Scene(Camera initialCamera)
        {
            this._activeCamera = initialCamera;
            this._shapes = new List<Shape>();
            this._lights = new List<Light>();
        }

        public void AddLight(Light light)
        {
            this._lights.Add(light);
        }

        public void AddShape(Shape shape)
        {
            this._shapes.Add(shape);
        }
        
        public void Render()
        {
            foreach (var shape in this._shapes)
            {
                shape.Render(this._activeCamera, this._lights);
            }
        }
    }


    class Program
    {
        public static void RenderSphere(
            int x, int y, int z, int radius, 
            int cameraX, int cameraY, int cameraZ, 
            int cameraDirectionX, int cameraDirectionY, int cameraDirectionZ, 
            int cameraVectorX, int cameraVectorY, int cameraVvectorZ, 
            int cameraPerspectiveFieldOfView, 
            int cameraNearClippingPlane, 
            int cameraFarClippingPlane, 
            int directionalLightX, int directionalLightY, int directionalLightZ, 
            int directionalLightColor) 
        {

        }

        public static void RenderCube(
            int x, int y, int z, int edgeLength,
            int cameraX, int cameraY, int cameraZ,
            int cameraDirectionX, int cameraDirectionY, int cameraDirectionZ,
            int cameraVectorX, int cameraVectorY, int cameraVvectorZ,
            int cameraPerspectiveFieldOfView,
            int cameraNearClippingPlane,
            int cameraFarClippingPlane,
            int directionalLightX, int directionalLightY, int directionalLightZ,
            int directionalLightColor)
        {

        }


        static void Main(string[] args)
        {
            var camera = new PerspectiveCamera(
                new Vector3D(30, 30, 30), 
                new Vector3D(50, 0, 0), 
                new Vector3D(4, 5, 2), 
                90, 20, 40);
            var sphere = new Sphere(new Vector3D(20, 20, 20), 8);
            var cube = new Cube(new Vector3D(10, 10, 10), 5);
            var light = new DirectionalLight(new Vector3D(2, 2, 5), 235);
            var scene = new Scene(camera);
            scene.AddShape(sphere);
            scene.AddShape(cube);
            scene.AddLight(light);
            scene.Render();

            RenderSphere(
                20, 20, 20, 
                8, 30, 30, 
                30, 50, 0, 
                0, 4, 5, 
                2, 90, 20, 
                40, 2, 2, 
                5, 235);
            RenderCube(
                10, 10, 10, 
                5, 30, 30, 
                30, 50, 0, 
                0, 4, 5, 
                2, 90, 20, 
                40, 2, 2, 
                5, 235);

            Console.ReadLine();
        }
    }
}
