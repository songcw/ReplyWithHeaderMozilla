/*
 * Copyright (c) 2015-2017 Jeevanandam M. (jeeva@myjeeva.com)
 *
 * This Source Code is subject to terms of MIT License.
 * Please refer to LICENSE.txt in the root folder of RWH extension.
 * You can download a copy of license at https://github.com/jeevatkm/ReplyWithHeaderMozilla/blob/master/LICENSE.txt
 */

// jshint strict: false

// RWH default preferences values
pref('extensions.replywithheadercn.enable', true);

// RWH Header
pref('extensions.replywithheadercn.header.from.style', 1);
pref('extensions.replywithheadercn.header.tocc.style', 1);
pref('extensions.replywithheadercn.header.lblseq.style', 1);
pref('extensions.replywithheadercn.header.font.face', 'Tahoma');
pref('extensions.replywithheadercn.header.font.size', 13);
pref('extensions.replywithheadercn.header.font.color', '#000000');
pref('extensions.replywithheadercn.header.separator.space.before', 1);
pref('extensions.replywithheadercn.header.space.before', 0);
pref('extensions.replywithheadercn.header.space.after', 1);
pref('extensions.replywithheadercn.header.separator.line.size', 1);
pref('extensions.replywithheadercn.header.separator.line.color', '#B5C4DF');
pref('extensions.replywithheadercn.trans.subject.prefix', false);

// RWH Date & Time
// 0 - Locale date format
// 1 - International date format - GMT
pref('extensions.replywithheadercn.header.date.format', 0);

// 0 - 12 hours AM/PM
// 1 - 24 hours
pref('extensions.replywithheadercn.header.time.format', 0);

// RWH Mail message
pref('extensions.replywithheadercn.clean.blockquote', true);
pref('extensions.replywithheadercn.clean.new.blockquote', false);
pref('extensions.replywithheadercn.clean.char.greaterthan', true);
pref('extensions.replywithheadercn.clean.pln.hdr.prefix', false);

// RWH Debug settings
pref('extensions.replywithheadercn.debug', false);
