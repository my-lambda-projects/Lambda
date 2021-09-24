# Copyright (c) 2014 Doug Hellmann.  All rights reserved.
#
#
#                         All Rights Reserved
#

#

#
"""Extension to allow references to figures.
"""

import functools

from docutils import nodes, utils

from sphinx.util import logging

LOG = logging.getLogger(__name__)


class figureref(nodes.reference):
    pass


def _role(typ, rawtext, text, lineno, inliner, options={}, content=[], nodeclass=None):
    text = utils.unescape(text)
    pnode = nodeclass(rawsource=text, text="", internal=True, refuri=text)
    return [pnode], []


def latex_visit_figureref(self, node):
    id = "figure:" + node["refuri"]
    self.body.append(r"Figure~\ref{%s}" % self.idescape(id))
    raise nodes.SkipNode


def latex_depart_figureref(self, node):
    return


def html_visit_figureref(self, node):
    self.body.append(r"the figure")
    raise nodes.SkipNode


def html_depart_figureref(self, node):
    return


def builder_inited(app):
    LOG.info("defining figure role")
    app.add_role("figure", functools.partial(_role, nodeclass=figureref))


def setup(app):
    LOG.info("initializing figureref")
    app.add_node(
        figureref,
        latex=(latex_visit_figureref, None),
        html=(html_visit_figureref, html_depart_figureref),
    )
    app.connect("builder-inited", builder_inited)
