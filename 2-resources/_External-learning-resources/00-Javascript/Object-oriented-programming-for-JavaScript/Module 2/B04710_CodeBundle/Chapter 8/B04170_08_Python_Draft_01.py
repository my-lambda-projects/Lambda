def render_sphere(x, y, z, radius, camera_x, camera_y, camera_z, camera_direction_x, camera_direction_y, camera_direction_z, camera_vector_x, camera_vector_y, camera_vector_z, camera_perspective_field_of_view, camera_near_clipping_plane, camera_far_clipping_plane, directional_light_x, directional_light_y, directional_light_z, directional_light_color):
    pass


def render_cube(x, y, z, edge_length, camera_x, camera_y, camera_z, camera_direction_x, camera_direction_y, camera_direction_z, camera_vector_x, camera_vector_y, camera_vector_z, camera_perspective_field_of_view, camera_near_clipping_plane, camera_far_clipping_plane, directional_light_x, directional_light_y, directional_light_z, directional_light_color):
    pass


class Vector3D:
    def __init__(self, x, y, z):
        self.x = x
        self.y = y
        self.z = z


class SceneElement:
    def __init__(self, location):
        self.location = location


class Light(SceneElement):
    def __init__(self, location):
        self.location = location


class DirectionalLight(Light):
    def __init__(self, location, color):
        super().__init__(location)
        self.color = color


class Camera(SceneElement):
    def __init__(self, location):
        super().__init__(location)


class PerspectiveCamera(Camera):
    def __init__(self, location, direction, vector, field_of_view, near_clipping_plane, far_clipping_plane):
        super().__init__(location)
        self.direction = direction
        self.vector = vector
        self.field_of_view = field_of_view
        self.near_clipping_plane = near_clipping_plane
        self.far_clipping_plane = far_clipping_plane

class Shape(SceneElement):
    def __init__(self, location):
        super().__init__(location)

    def render(self, camera, lights):
        pass


class Sphere(Shape):
    def __init__(self, location, radius):
        super().__init__(location)
        self.radius = radius

    def render(self, camera, lights):
        print("Rendering a sphere.")

class Cube(Shape):
    def __init__(self, location, edge_length):
        super().__init__(location)
        self.edge_length = edge_length

    def render(self, camera, lights):
        print("Rendering a cube.")

class Scene:
    def __init__(self, initial_camera):
        self.active_camera = initial_camera
        self.shapes = []
        self.lights = []

    def add_light(self, light):
        self.lights.append(light)

    def add_shape(self, shape):
        self.shapes.append(shape)

    def render(self):
        for shape in self.shapes:
            shape.render(self.active_camera, self.lights)


if __name__ == '__main__':
    camera = PerspectiveCamera(Vector3D(30, 30, 30), Vector3D(50, 0, 0), Vector3D(4, 5, 2), 90, 20, 40)
    sphere = Sphere(Vector3D(20, 20, 20), 8)
    cube = Cube(Vector3D(10, 10, 10), 5)
    light = DirectionalLight(Vector3D(2, 2, 5), 235)
    scene = Scene(camera)
    scene.add_shape(sphere)
    scene.add_shape(cube)
    scene.add_light(light)
    scene.render()

	
	
if __name__ == '__main__':
    render_sphere(20, 20, 20, 8, 30, 30, 30, 50, 0, 0, 4, 5, 2, 90, 20, 40, 2, 2, 5, 235)
    render_cube(10, 10, 10, 5, 30, 30, 30, 50, 0, 0, 4, 5, 2, 90, 20, 40, 2, 2, 5, 235)
