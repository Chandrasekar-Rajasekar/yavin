/**
 * Copyright 2018, Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 *
 * Usage:
 *  {{scrollbar-wrapper
 *    options=(hash of options)
 *  }}
 */

import Component from '@ember/component';
import layout from '../templates/components/scrollbar-wrapper';
import { PerfectScrollbarMixin } from 'ember-perfect-scrollbar';
import { computed } from '@ember/object';

export default Component.extend(PerfectScrollbarMixin, {
  layout,
  perfectScrollbarOptions: computed.reads('options')
});
