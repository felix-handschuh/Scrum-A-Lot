// Copyright (C) 2022 Felix Handschuh, Tobias Schwerdtfeger
//
// This file is part of Scrum-A-Lot.
//
// Scrum-A-Lot is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Scrum-A-Lot is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Scrum-A-Lot.  If not, see <http://www.gnu.org/licenses/>.

export type PaddingProps =
  | {
      top: string
      bottom: string
      start: string
      end: string
    }
  | {
      horizontal: string
      vertical: string
    }
  | {
      all: string
    }

export type BoxAlignProps = 'topStart' | 'topEnd' | 'topCenter' | 'bottomStart' | 'bottomEnd' | 'bottomCenter'
export type AlignProps = 'start' | 'end' | 'center' | 'fill' | BoxAlignProps

export type LayoutProps = {
  padding?: PaddingProps
  alignment?: AlignProps
  height?: string
  width?: string
}
