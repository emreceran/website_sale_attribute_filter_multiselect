(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * Multiple Select en-US translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  $.fn.multipleSelect.locales['en-US'] = {
    formatSelectAll: function formatSelectAll() {
      return '[Select all]';
    },
    formatAllSelected: function formatAllSelected() {
      return 'All selected';
    },
    formatCountSelected: function formatCountSelected(count, total) {
      return count + ' of ' + total + ' selected';
    },
    formatNoMatchesFound: function formatNoMatchesFound() {
      return 'No matches found';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['en-US']);


/**
   * Multiple Select tr-TR translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  $.fn.multipleSelect.locales['tr-TR'] = {
    formatSelectAll: function formatSelectAll() {
      return '[Tümünü Seç]';
    },
    formatAllSelected: function formatAllSelected() {
      return 'Hepsi Seçildi';
    },
    formatCountSelected: function formatCountSelected(count, total) {
      return total + ' nın ' + total + ' seçildi';
    },
    formatNoMatchesFound: function formatNoMatchesFound() {
      return 'Hiç Sonuç Bulunamadı  ';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['en-US']);


 /**
   * Multiple Select en-US translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  $.fn.multipleSelect.locales['ar_001'] = {
    formatSelectAll: function formatSelectAll() {
      return '[اختر الكل]';
    },
    formatAllSelected: function formatAllSelected() {
      return 'تم اختيار كل شيء';
    },
    formatCountSelected: function formatCountSelected(count, total) {
      return count + ' of ' + total + ' selected';
    },
    formatNoMatchesFound: function formatNoMatchesFound() {
      return 'لم يتم العثور على تطابق';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['en-US']);



 /**
   * Multiple Select en-US translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  $.fn.multipleSelect.locales['ru_RU'] = {
    formatSelectAll: function formatSelectAll() {
      return '[Выбрать все]';
    },
    formatAllSelected: function formatAllSelected() {
      return 'Все выбрано';
    },
    formatCountSelected: function formatCountSelected(count, total) {
      return count + ' of ' + total + ' selected';
    },
    formatNoMatchesFound: function formatNoMatchesFound() {
      return 'Ничего не найдено';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['en-US']);


}));
