import pygame
import random

from pygame.math import Vector2
from pygame import Rect

class Block:
    """
    Base class for square or rectangular object
    """

    def __init__(self, bounds, position, width, height, color):
        # Create a rectangle centered around the x and y
        self.bounds = bounds
        self.position = position
        self.rectangle = self.set_rectangle(position, width, height)
        self.color = color

    def update(self):
        # TODO:  Add base functionality
        pass

    def set_rectangle(self, position, width, height):
        # Creates a rectangle of the given width and height centered at the x/y coordinates
        return pygame.Rect(position.x - (width/2),
                           position.y - (height/2),
                                    width,
                                    height)

    def draw(self, screen, pygame):
        pygame.draw.rect(screen, self.color, self.rectangle)
