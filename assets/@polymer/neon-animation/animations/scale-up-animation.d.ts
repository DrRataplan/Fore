/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   animations/scale-up-animation.js
 */

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';

import {NeonAnimationBehavior} from '../neon-animation-behavior.js';

import {LegacyElementMixin} from '@polymer/polymer/lib/legacy/legacy-element-mixin.js';

/**
 * `<scale-up-animation>` animates the scale transform of an element from 0 to 1.
 * By default it scales in both the x and y axes.
 *
 * Configuration:
 * ```
 * {
 *   name: 'scale-up-animation',
 *   node: <node>,
 *   axis: 'x' | 'y' | '',
 *   transformOrigin: <transform-origin>,
 *   timing: <animation-timing>
 * }
 * ```
 */
interface ScaleUpAnimationElement extends NeonAnimationBehavior, LegacyElementMixin, HTMLElement {
  configure(config: any): any;
}

export {ScaleUpAnimationElement};

declare global {

  interface HTMLElementTagNameMap {
    "scale-up-animation": ScaleUpAnimationElement;
  }
}