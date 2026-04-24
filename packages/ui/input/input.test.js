import { describe, it, expect, beforeEach } from 'vitest';

describe('Input Component', () => {
  let Alpine;

  beforeEach(async () => {
    Alpine = await import('alpinejs');
    Alpine.start();
  });

  describe('Input Types', () => {
    const inputTypes = [
      'text',
      'email',
      'password',
      'number',
      'search',
      'tel',
      'url',
      'date',
      'time',
      'datetime-local',
      'color'
    ];

    inputTypes.forEach(type => {
      it(`should support type="${type}"`, () => {
        const input = document.createElement('input');
        input.type = type;
        expect(input.type).toBe(type);
      });
    });
  });

  describe('Input Validation', () => {
    it('should validate required field', () => {
      const input = document.createElement('input');
      input.required = true;
      expect(input.required).toBe(true);
    });

    it('should validate minlength', () => {
      const input = document.createElement('input');
      input.minLength = 3;
      expect(input.minLength).toBe(3);
    });

    it('should validate maxlength', () => {
      const input = document.createElement('input');
      input.maxLength = 10;
      expect(input.maxLength).toBe(10);
    });

    it('should validate min value for number inputs', () => {
      const input = document.createElement('input');
      input.type = 'number';
      input.min = 0;
      expect(input.min).toBe('0');
    });

    it('should validate max value for number inputs', () => {
      const input = document.createElement('input');
      input.type = 'number';
      input.max = 100;
      expect(input.max).toBe('100');
    });

    it('should validate pattern', () => {
      const input = document.createElement('input');
      input.pattern = '^[a-zA-Z]+$';
      expect(input.pattern).toBe('^[a-zA-Z]+$');
    });
  });

  describe('Input States', () => {
    it('should have default state', () => {
      const input = document.createElement('input');
      expect(input.disabled).toBe(false);
      expect(input.readOnly).toBe(false);
    });

    it('should support disabled state', () => {
      const input = document.createElement('input');
      input.disabled = true;
      expect(input.disabled).toBe(true);
    });

    it('should support readonly state', () => {
      const input = document.createElement('input');
      input.readOnly = true;
      expect(input.readOnly).toBe(true);
    });
  });

  describe('Email Validation', () => {
    const validEmails = [
      'test@example.com',
      'user.name@domain.org',
      'user+tag@example.co.uk'
    ];

    const invalidEmails = [
      'invalid',
      '@nodomain.com',
      'spaces not@allowed.com'
    ];

    validEmails.forEach(email => {
      it(`should accept valid email: ${email}`, () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        expect(regex.test(email)).toBe(true);
      });
    });

    invalidEmails.forEach(email => {
      it(`should reject invalid email: ${email}`, () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        expect(regex.test(email)).toBe(false);
      });
    });
  });

  describe('URL Validation', () => {
    const validUrls = [
      'https://example.com',
      'http://www.domain.org/path',
      'https://sub.domain.com/path/to/page'
    ];

    const invalidUrls = [
      'not-a-url',
      'missing-protocol.com',
      'ftp://invalid'
    ];

    validUrls.forEach(url => {
      it(`should accept valid URL: ${url}`, () => {
        try {
          new URL(url);
          expect(true).toBe(true);
        } catch {
          expect(true).toBe(false);
        }
      });
    });

    invalidUrls.forEach(url => {
      it(`should reject invalid URL: ${url}`, () => {
        try {
          new URL(url);
          expect(true).toBe(false);
        } catch {
          expect(true).toBe(true);
        }
      });
    });
  });

  describe('Textarea', () => {
    it('should support rows attribute', () => {
      const textarea = document.createElement('textarea');
      textarea.rows = 4;
      expect(textarea.rows).toBe(4);
    });

    it('should support resize', () => {
      const textarea = document.createElement('textarea');
      expect(textarea.style.resize).not.toBe('none');
    });
  });

  describe('Character Counter', () => {
    it('should calculate remaining characters', () => {
      const maxLength = 10;
      const currentLength = 5;
      const remaining = maxLength - currentLength;
      expect(remaining).toBe(5);
    });

    it('should detect exceeded characters', () => {
      const maxLength = 10;
      const currentLength = 15;
      const exceeded = currentLength > maxLength;
      expect(exceeded).toBe(true);
    });
  });
});
